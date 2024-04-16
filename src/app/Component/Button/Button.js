export default function Button({ className,handleClick,content,disabled }) {
  return (
    <div>
      <button className={className}
      onClick={handleClick}
      disabled={disabled}
      >{content}</button>
    </div>
  );
}
