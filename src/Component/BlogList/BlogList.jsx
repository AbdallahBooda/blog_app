import BlogCard from "../BlogCard/BlogCard";
function BlogList() {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <BlogCard
            img="1.svg"
            blogerName="Tracey Wilson"
            blogerimg="9.svg"
          />
          <BlogCard img="3.svg" blogerName="Ernie Smith" blogerimg="12.svg" />
          <BlogCard
            img="6.svg"
            blogerName="Jason Francisco"
            blogerimg="10.svg"
          />
        </div>

        <div className="col-md-4">
          <BlogCard
            img="2.svg"
            blogerName="Jason Francisco"
            blogerimg="10.svg"
          />
          <BlogCard
            img="4.svg"
            blogerName="Eric Smith"
            blogerimg="13.svg"
          />
          <BlogCard
            img="7.svg"
            blogerName="Jason Francisco"
            blogerimg="10.svg"
          />
        </div>

        <div className="col-md-4">
          <BlogCard
            img="2.svg"
            blogerName="Elizabeth Slavin"
            blogerimg="11.svg"
          />
          <BlogCard
            img="5.svg"
            blogerName="Tracey Wilson"
            blogerimg="9.svg"
          />
          <BlogCard
            img="8.svg"
            blogerName="Eric Smith"
            blogerimg="12.svg"
          />
        </div>
      </div>
    </>
  );
}

export default BlogList;
