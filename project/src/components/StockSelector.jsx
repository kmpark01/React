import React, { useState } from "react";

export default function ImageGenerator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [shoulderWidth, setShoulderWidth] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setImageUrl("");

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          height: Number(height),
          weight: Number(weight),
          shoulderWidth: Number(shoulderWidth),
        }),
      });
      const data = await response.json();

      if (data.image) {
        setImageUrl(data.image); // base64 문자열
      } else {
        setError(data.error || "Image generation failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>AI 의상 시착 이미지 생성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="키 (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="체중 (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="어깨 너비 (cm)"
          value={shoulderWidth}
          onChange={(e) => setShoulderWidth(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "생성 중..." : "이미지 생성"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && (
        <div>
          <h3>생성된 이미지</h3>
          <img src={`data:image/png;base64,${imageUrl}`} alt="Generated AI Person" />
        </div>
      )}
    </div>
  );
}
