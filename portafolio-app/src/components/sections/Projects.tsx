import MagicLogisticsPreview from '../../assets/magic-logistics-preview.png';
import PortfolioPreview from '../../assets/PortfolioPreview.png';
import ProxmoxPreview from '../../assets/ProxmoxPreview.png';
import RoboticsImage from '../../assets/Robot.jpeg';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    size: "large" | "small";
    image?: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Magic-Logistics",
            description: "Full-stack web application that aims to optimize flight inventory management.",
            tags: ["Python", "FastAPI", "React", "ML"],
            link: "https://www.youtube.com/watch?v=6BpIZmF28jQ",
            size: "large",
            image: MagicLogisticsPreview
        },
        {
            title: "Homelab Infrastructure",
            description: "Proxmox cluster & VLANs management with git-ops.",
            tags: ["Linux", "Networking", "Docker"],
            size: "small",
            image: ProxmoxPreview
        },
        {
            title: "Personal Portfolio",
            description: "Built with React and Tailwind CSS.",
            tags: ["React", "Tailwind"],
            link: "https://github.com/MaCaDo1136/Portfolio",
            size: "small",
            image: PortfolioPreview
        },
        {
            title: "Competitive Robots (FRC & FTC)",
            description: "Programming and Mentoring for competitive robotics teams using Java",
            tags: ["Java"],
            link: "https://github.com/VOLTEC6647",
            size: "large",
            image: RoboticsImage
        }
    ];

    return (
        <section className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter">Selected Projects</h2>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

                {projects.map((p, i) => (
                    <div key={i}
                        onClick={() => p.link && window.open(p.link, '_blank')}
                        className={`
                        group relative overflow-hidden rounded-3xl p-6 border border-neutral-800 bg-neutral-900/50
                        ${p.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                        cursor-pointer hover:border-neutral-600 transition-all
                    `}>


                        {p.image && (
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                            </div>
                        )}

                        <div className="relative z-10 flex flex-col justify-end h-full">
                            <div className="mb-4 flex flex-wrap gap-2">
                                {p.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/20 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {p.title}
                            </h3>

                            <p className="text-neutral-300 mt-2 text-sm line-clamp-2">
                                {p.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}