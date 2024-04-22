function Bloger(props) {
  return (
    <>
      <div className="row pt-3">
        <div className="col-2">
          <img
            src={props.blogerimg}
            className="rounded-circle"
            width={"36px"}
            alt="..."
          />
        </div>
        <div className="col-5">
          <p className="pt-1">{props.blogerName}</p>
        </div>
        <div className="col-5">
          <p className="pt-1">August 20, 2022</p>
        </div>
      </div>
    </>
  );
}

export default Bloger;
