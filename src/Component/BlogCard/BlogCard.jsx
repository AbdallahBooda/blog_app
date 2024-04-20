import { Link } from "react-router-dom";
import "./BlogCard.css"
function BlogCard(props) {
  return (
    <>
      <Link to="BlogDetails">
        <div className="m-5">
          <div className="card">
            <img
              src={props.img}
              className="card-img-top img_card"
              alt="..."
            />
            
            <div className="card-body">
            <p class="text-primary Technology">Technology</p>

              <h5 className="card-title">
              The Impact of Technology on the Workplace: How Technology is Changing
              </h5>
              <div className="row">
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
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
