import { useState, useEffect } from "react";
import { AuroraHero } from "@/components/ui/aurora-hero";
import { VercelV0Chat } from "@/components/ui/v0-ai-chat";
import Navigation from "@/components/Navigation";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "crispy-canvas",
    title: "Crispy Canvas",
    imgUrl:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    avatar: "https://i.pravatar.cc/40?img=5",
    viewed: "20 minutes ago",
  },
  {
    id: "pet-partner-portal",
    title: "Pet Partner Portal",
    imgUrl:
      "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&h=350",
    avatar: "https://i.pravatar.cc/40?img=6",
    viewed: "4 days ago",
  },
  {
    id: "project-atlas",
    title: "Project Atlas",
    imgUrl:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&h=350",
    avatar: "https://i.pravatar.cc/40?img=7",
    viewed: "4 days ago",
  },
];

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 2000);
     return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navigation />

      <AuroraHero>
        <VercelV0Chat />

        {/* ------------------ PROJECT SECTION ------------------ */}
        <section className="mt-20 px-6 md:px-12 w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-6 text-lg font-medium">
              <button className="text-white bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                Recently viewed
              </button>
              <button className="text-gray-400 hover:text-white transition">
                My projects
              </button>
            </div>

            <Link
              to="/project"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              Browse all →
            </Link>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <Link to={`/project/${p.id}`} key={p.id}>
                <div className="group cursor-pointer">
                  <div className="h-48 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                    <img
                      src={p.imgUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <img
                      src={p.avatar}
                      className="w-8 h-8 rounded-full"
                      alt="User avatar"
                    />
                    <div>
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      <p className="text-sm text-gray-400">
                        Viewed {p.viewed}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AuroraHero>
    </div>
  );
};

export default Index;
