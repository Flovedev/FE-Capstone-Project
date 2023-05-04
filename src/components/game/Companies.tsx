interface IProps {
  data: any;
}

const Companies = (props: IProps) => {
  if (!props.data) {
    return <div>Loading</div>;
  }

  const developer = props.data.filter((e: any) => e.developer === true);
  const publisher = props.data.filter((e: any) => e.developer === true);
  const porting = props.data.filter((e: any) => e.porting === true);
  const supporting = props.data.filter((e: any) => e.supporting === true);

  return (
    <div>
      {developer.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Developer:</p>
          {publisher.map((e: any) => (
            <span key={e.company.name}>{e.company.name}</span>
          ))}
        </div>
      )}
      {publisher.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Publisher:</p>
          {publisher.map((e: any) => (
            <span key={e.company.name}>{e.company.name}</span>
          ))}
        </div>
      )}
      {porting.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Porting:</p>
          {publisher.map((e: any) => (
            <span key={e.company.name}>{e.company.name}</span>
          ))}
        </div>
      )}
      {supporting.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Supporting:</p>
          {publisher.map((e: any) => (
            <span key={e.company.name}>{e.company.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
