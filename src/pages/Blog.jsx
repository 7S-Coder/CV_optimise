
import "../css/components/Blog.scss";
import blogData from "../datas/blog.json";

function Blog() {
  return (
    <main id="blog-container">
      <div className="hero-section">
        <div className="hero-overlay">
        </div>
      </div>

      <div id="title-blog">
        <h1>BLOG</h1>
        <span>Retrouvez ici quelques articles sur le développement web</span>
      </div>

      <section className="blog-section">
        <div className="blog-container">
          <div className="row">
            {blogData.map((article) => (
              <div key={article.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <img 
                    src={article.image} 
                    className="card-img-top" 
                    alt={article.altText} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <button className="btn btn-primary">Lire la suite</button>
                    <p className="card-tech">Publié le {article.publishDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
