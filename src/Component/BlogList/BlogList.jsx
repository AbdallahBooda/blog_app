import BlogCard from "../BlogCard/BlogCard";
function BlogList() {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <BlogCard
            img="1.jpeg"
            blogerName="Tracey Wilson"
            blogerimg="9.jpeg"
          />
          <BlogCard img="3.jpeg" blogerName="Ernie Smith" blogerimg="12.jpeg" />
          <BlogCard
            img="6.jpeg"
            blogerName="Jason Francisco"
            blogerimg="10.jpeg"
          />
        </div>

        <div className="col-md-4">
          <BlogCard
            img="2.jpeg"
            blogerName="Jason Francisco"
            blogerimg="10.jpeg"
          />
          <BlogCard
            img="4.jpeg"
            blogerName="Eric Smith"
            blogerimg="13.jpeg"
          />
          <BlogCard
            img="7.jpeg"
            blogerName="Jason Francisco"
            blogerimg="10.jpeg"
          />
        </div>

        <div className="col-md-4">
          <BlogCard
            img="2.jpeg"
            blogerName="Elizabeth Slavin"
            blogerimg="11.jpeg"
          />
          <BlogCard
            img="5.jpeg"
            blogerName="Tracey Wilson"
            blogerimg="9.jpeg"
          />
          <BlogCard
            img="8.jpeg"
            blogerName="Eric Smith"
            blogerimg="12.jpeg"
          />
        </div>
      </div>
    </>
  );
}

export default BlogList;
