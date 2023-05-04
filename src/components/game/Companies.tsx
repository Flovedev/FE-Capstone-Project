import { ICompany, IGame } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGame["involved_companies"];
}

const Companies = (props: IProps) => {
  if (!props.data) {
    return <div className="m-2"></div>;
  }

  const developer = props.data.filter((e: ICompany) => e.developer === true);
  const publisher = props.data.filter((e: ICompany) => e.developer === true);
  const porting = props.data.filter((e: ICompany) => e.porting === true);
  const supporting = props.data.filter((e: ICompany) => e.supporting === true);

  return (
    <div>
      {developer.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Developer:</p>
          {publisher.map((e: ICompany) => (
            <span className="ml-2" key={e.company.name}>
              {e.company.name}
            </span>
          ))}
        </div>
      )}
      {publisher.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Publisher:</p>
          {publisher.map((e: ICompany) => (
            <span className="ml-2" key={e.company.name}>
              {e.company.name}
            </span>
          ))}
        </div>
      )}
      {porting.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Porting:</p>
          {publisher.map((e: ICompany) => (
            <span className="ml-2" key={e.company.name}>
              {e.company.name}
            </span>
          ))}
        </div>
      )}
      {supporting.length > 0 && (
        <div>
          <p className="mb-0 mt-2">Supporting:</p>
          {publisher.map((e: ICompany) => (
            <span className="ml-2" key={e.company.name}>
              {e.company.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
