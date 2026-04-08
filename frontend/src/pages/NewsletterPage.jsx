import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axiosInstance from "../lib/axios";
import { toast } from "react-hot-toast";

function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [previewData, setPreviewData] = useState({ jobs: [], articles: [], loading: true });

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await axiosInstance.get("/newsletter/preview");
        setPreviewData({ jobs: res.data.jobs, articles: res.data.articles, loading: false });
      } catch (err) {
        console.error("Failed to load preview", err);
        setPreviewData(prev => ({ ...prev, loading: false }));
      }
    };
    fetchPreview();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/newsletter/subscribe", { email });
      
      toast.success(res.data?.message || "Successfully subscribed!");
      setEmail("");
    } catch (err) {
      toast.error(err.response?.data?.error || "Subscription failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .news-root { min-height: 100vh; background: #0A0C0F; color: #EEF2FF; font-family: 'DM Sans', sans-serif; padding-bottom: 80px; }
        .hero-section { max-width: 800px; margin: 60px auto 40px; text-align: center; }
        .hero-title { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 16px; color: #EEF2FF; }
        .hero-subtitle { font-size: 1.1rem; color: #7A8499; margin-bottom: 40px; max-width: 600px; margin-inline: auto; line-height: 1.6; }
        
        .sub-container { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 40px; max-width: 500px; margin: 0 auto; box-shadow: 0 8px 32px rgba(0,0,0,0.4); backdrop-filter: blur(10px); }
        .sub-input-group { display: flex; flex-direction: column; gap: 12px; }
        .sub-input { width: 100%; background: #0D1117; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 14px 16px; color: #EEF2FF; font-size: 15px; outline: none; transition: all 0.2s; }
        .sub-input:focus { border-color: #00E5A0; background: #161C28; }
        .sub-btn { width: 100%; background: #00E5A0; color: #0A0C0F; border: none; padding: 14px; border-radius: 8px; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.2s; display: flex; justify-content: center; align-items: center; }
        .sub-btn:hover { background: #00faaf; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0, 229, 160, 0.2); }
        
        .preview-section { max-width: 1000px; margin: 80px auto 0; padding: 0 24px; }
        .preview-header { font-family: 'Syne', sans-serif; border-bottom: 1px solid #161C28; padding-bottom: 12px; margin-bottom: 24px; font-size: 1.5rem; display: flex; align-items: center; gap: 12px; }
        
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }

        .article-card { background: rgba(255,255,255,0.01); border: 1px solid #161C28; border-radius: 12px; padding: 20px; transition: all 0.2s; text-decoration: none; display: block; margin-bottom: 16px; }
        .article-card:hover { border-color: #8B7CF650; background: rgba(139, 124, 246, 0.05); transform: translateY(-2px); }
        .article-title { color: #8B7CF6; font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; line-height: 1.4; }
        .article-meta { color: #7A8499; font-size: 13px; font-family: 'JetBrains Mono', monospace; }

        .job-card { background: rgba(255,255,255,0.01); border: 1px solid #161C28; border-radius: 12px; padding: 20px; transition: all 0.2s; text-decoration: none; display: block; margin-bottom: 16px; }
        .job-card:hover { border-color: #00E5A050; background: rgba(0, 229, 160, 0.05); transform: translateY(-2px); }
        .job-title { color: #00E5A0; font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .job-meta { color: #7A8499; font-size: 13px; font-family: 'JetBrains Mono', monospace; }
        .badge { background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; color: #EEF2FF; font-size: 11px; margin-right: 8px; }
      `}</style>

      <div className="news-root">
        <Navbar />
        
        <div className="hero-section px-4">
          <h1 className="hero-title">The Daily <span style={{ color: '#00E5A0' }}>Algorithm</span></h1>
          <p className="hero-subtitle">
            A premium daily dispatch of the highest-rated Artificial Intelligence insights and hand-picked remote entry-level software engineering opportunities.
          </p>

          <div className="sub-container">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: '#EEF2FF' }}>Join the developer elite.</h2>
            <form onSubmit={handleSubscribe} className="sub-input-group">
              <input
                type="email"
                required
                className="sub-input"
                placeholder="developer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <button type="submit" className="sub-btn" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe to Updates"}
              </button>
            </form>
            <p style={{ marginTop: '16px', fontSize: '12px', color: '#7A8499' }}>100% free. No spam. One daily dispatch.</p>
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="preview-section">
          {previewData.loading ? (
             <div style={{ textAlign: 'center', color: '#7A8499', padding: '40px' }}>Loading today's live preview...</div>
          ) : (
            <div className="grid-2">
               {/* Left Column: AI News */}
               <div>
                 <h2 className="preview-header">
                   <span style={{ color: '#8B7CF6' }}>🔥</span> Today's AI & Tech News
                 </h2>
                 {previewData.articles.length > 0 ? (
                    previewData.articles.map(article => (
                      <a href={article.url} target="_blank" rel="noreferrer" key={article.id} className="article-card">
                        <div className="article-title">{article.title}</div>
                        <div className="article-meta">By {article.user.name} • {article.reading_time_minutes} min read</div>
                      </a>
                    ))
                 ) : (
                    <div style={{ color: '#7A8499' }}>No trending articles found today.</div>
                 )}
               </div>

               {/* Right Column: Fresher Jobs */}
               <div>
                 <h2 className="preview-header">
                   <span style={{ color: '#00E5A0' }}>💼</span> Remote Entry-Level Jobs
                 </h2>
                 {previewData.jobs.length > 0 ? (
                    previewData.jobs.map(job => (
                      <a href={job.url} target="_blank" rel="noreferrer" key={job.id} className="job-card">
                        <div className="job-title">{job.title}</div>
                        <div className="job-meta">
                          <span className="badge">{job.company_name}</span>
                          <span className="badge">{job.job_type || "Remote"}</span>
                        </div>
                      </a>
                    ))
                 ) : (
                    <div style={{ padding: '20px', background: '#111520', borderRadius: '8px', color: '#A0ABC0', fontSize: '14px', lineHeight: '1.6' }}>
                      <strong>Zero active listings found right now.</strong><br/>
                      Our rigorous filter rejected all new job posts today because they either required senior experience or weren't strictly entry-level remote. <br/><br/>Subscribe above, and we'll alert you the moment a verified fresher position opens up!
                    </div>
                 )}
               </div>
            </div>
          )}
        </div>
        
      </div>
    </>
  );
}

export default NewsletterPage;


