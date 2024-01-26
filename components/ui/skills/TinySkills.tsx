interface IProps {
  title :string;
   content:string;
}
const TinySkills = ({ title, content }: any) => {
  return (
    <div className="tinySkills">
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default TinySkills;
