import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addnew() {
 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    offerPrice: "",
    category: "",
    image: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("name", formData.title);
    data.append("rate1", formData.price);
    data.append("rate2", formData.offerPrice);
    data.append("category", formData.category);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const res = await axios.post("http://localhost:8080/product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
   

      // Reset form
      setFormData({
        title: "",
        price: "",
        offerPrice: "",
        category: "",
        image: null,
      });
      // Also reset file input value manually if needed
      (document.getElementById("fileInput") as HTMLInputElement).value = "";
    } catch (error) {
      console.error("Error uploading:", error);
      setMessage(" Failed to upload product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <button
          onClick={() => navigate("/")}
          type="button"
          className="text-blue-600 hover:underline"
        >
          ← Back to Home
        </button>
        <h1 className="text-xl font-semibold text-center">Upload Product</h1>

        {message && (
          <p className={`text-center font-medium ${message.startsWith("") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="offerPrice"
          placeholder="Offer Price"
          value={formData.offerPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="TV & Home Theater">TV & Home Theater</option>
          <option value="Computers & Tablets">Computers & Tablets</option>
          <option value="Video Games">Video Games</option>
          <option value="Appliances">Appliances</option>
          <option value="Cell Phones">Cell Phones</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="others">Others</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 rounded ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
