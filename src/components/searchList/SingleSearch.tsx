interface IProps {
  data: any;
}

const SingleSearch = (props: IProps) => {
  //   console.log(props.data);
  return (
    <div>
      <p>{props.data.name}</p>
    </div>
  );
};

export default SingleSearch;
