import Project from "../components/Project"
import { myProjects } from "../constants"
import { motion } from "framer-motion"

const Product = () => {
  return (
    <>
      <section id="product" className="relative pt-10 pb-40 container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div 
          className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {myProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </section>  
    </>
  )
}

export default Product
