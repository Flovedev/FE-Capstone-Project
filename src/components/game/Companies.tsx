interface IProps {
  data: any;
}

const Companies = (props: IProps) => {
  return (
    <div>
      {props.data.map((e: any, index: number) => (
        <div key={index}>
          {e.developer && <p>Developer: {e.company.name}</p>}
          {e.publisher && <p>Publisher: {e.company.name}</p>}
          {e.porting && <p>Porting: {e.company.name}</p>}
          {e.supporting && <p>Supporting: {e.company.name}</p>}
        </div>
      ))}
    </div>
  );
};

export default Companies;
