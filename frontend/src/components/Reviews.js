import React, { useState } from "react";
import 'frontend/src/css/Reviews.css';  // Use your desired CSS file for reviews styling

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      title: "Great School!",
      reviewer: "John Doe",
      rating: 5,
      date: "2025-03-15",
      reviewText: "The school provides excellent support for students with special needs. Highly recommended!",
    },
    {
      id: 2,
      title: "Needs Improvement",
      reviewer: "Jane Smith",
      rating: 3,
      date: "2025-03-18",
      reviewText: "The school has a decent environment, but there could be more activities for the students.",
    },
    {
      id: 3,
      title: "Wonderful Experience",
      reviewer: "Alice Johnson",
      rating: 4,
      date: "2025-03-20",
      reviewText: "Had a great experience. The staff are very supportive and the school facilities are good.",
    },
  ]);

  return (
    <section className="dashboard-reviews">
      <div className="overview-card">📢 Reviews : 3</div>

      {/* Review Details Section */}
      <section className="reviews-details">
        <h2>Recent Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.title}</h3>
            <p><strong>Reviewer:</strong> {review.reviewer}</p>
            <p><strong>Rating:</strong> {"⭐".repeat(review.rating)}</p>
            <p><strong>Date:</strong> {review.date}</p>
            <p><strong>Review:</strong> {review.reviewText}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Reviews;
