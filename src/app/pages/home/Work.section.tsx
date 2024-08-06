import { Icon } from "@iconify/react";
import { dProjects, dStacks } from "app/config/data/home.data";

const Work = () => {
  return (
    <section className="m-section w-full max-w-[1600px] mx-auto" id="projects">
      <h1 className="text-gold-main text-center">Show Case</h1>
      <div className="mt-12 flex justify-center flex-wrap gap-4">
        {dProjects.map((item) => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              href={item.link}
              key={`work-view-${item.title}`}
              className="relative w-full max-w-[480px] border border-gold-main/50 bg-gold-main/20 hover:bg-gray-100 m-transition-color dark:hover:bg-dark-light p-3 group"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover sepia group-hover:sepia-0 transition-all duration-300"
                  alt=""
                />
                <div className=" absolute w-full bottom-0 left-0 p-2 flex items-center justify-end gap-2 flex-wrap mt-3">
                  {item.types.map((subitem) => {
                    return (
                      <div
                        className="px-2 py-0.5 bg-gold-main/60 backdrop-blur-sm text-dark-bright "
                        key={`type-${item.title}-${subitem}`}
                      >
                        {subitem}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-12">
                <span className="text-2xl font-bold">{item.title}</span>{" "}
                <span className="opacity-80">{item.industry}</span>
              </div>
              <div className="mt-6">{item.description}</div>

              <div className="flex items-center gap-2 flex-wrap mt-4 mb-8">
                {item.stacks.map((subitem: any) => {
                  return (
                    <Icon
                      key={`detail-stack-${item.title}-${subitem}`}
                      icon={
                        dStacks.find((i) => i.title === subitem)?.icon || ""
                      }
                      className="w-7 h-7"
                    />
                  );
                })}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
