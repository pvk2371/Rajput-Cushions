import { Star, StarHalf } from "lucide-react";
export default function StarRating({ rating, max = 5, size = 16 }) {
  const stars = [];
  const floorRating = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;
  for (let i = 1; i <= max; i++) {
    if (i <= floorRating) {
      stars.push(
        <Star
          key={i}
          className="fill-primary-gold text-primary-gold"
          style={{ width: size, height: size }}
        />
      );
    } else if (i === floorRating + 1 && hasHalf) {
      stars.push(
        <StarHalf
          key={i}
          className="fill-primary-gold text-primary-gold"
          style={{ width: size, height: size }}
        />
      );
    } else {
      stars.push(
        <Star
          key={i}
          className="text-light-beige fill-light-beige"
          style={{ width: size, height: size }}
        />
      );
    }
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}
