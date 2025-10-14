type CardProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
};

function Card({
  imageUrl,
  title = "Default title",
  description = "Default description",
}: CardProps) {
  return (
    <div className="card-container">
      {imageUrl ? (
        <img src={imageUrl} />
      ) : (
        <div className="card-image-placeholder"></div>
      )}
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
