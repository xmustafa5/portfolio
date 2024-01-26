interface IProps {
  title:string,
  subTitle:string,
}
const TitleSection = ({ title, subTitle }: any) => {
  return (
    <div className={subTitle ? "containerTitle" : "containerTitleProject"}>
      {subTitle ? <p>{subTitle}</p> : null}
      <h1 className="">{title}</h1>
    </div>
  );
};
export default TitleSection;
