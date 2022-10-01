import Image from "next/image";

export default function AboutMe({ name, picture, about, children }) {
  const { src, width, height, alt } = picture;
  return (
    <div className="p-5 text-center h-screen bg-slate-900 justify-center flex flex-col gap-4 items-center">
      <picture className="relative">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="rounded-full "
        />
        <div className="absolute bottom-0 ">
          <p className="text-white text-5xl font-bold">Hello!</p>
        </div>
      </picture>
      <section>
        <p className="text-white text-3xl">
          Mi nombre es{" "}
          <span className="font-bold text-4xl text-red-600">{name}</span>
        </p>
      </section>
      <article className="max-w-lg">
        <p className="text-gray-400 text-lg">{about}</p>
      </article>
      <section>{children}</section>
    </div>
  );
}

AboutMe.defaultProps = {
  name: "Cristian Florez",
  picture: {
    src: "https://media-exp1.licdn.com/dms/image/C4E03AQG9azD5g29yKw/profile-displayphoto-shrink_800_800/0/1625066247309?e=1669852800&v=beta&t=yH7gJ5my2eV5q5CM6toaimjKCJffumeamnO2IRoD5lI",
    width: 300,
    height: 300,
    alt: "profilepicture",
  },
  about:
    "Soy ingeniero mecatrónico con alma de desarrollador frontend y quiero enseñarte todo lo que he aprendido en mis estudios, haciendo una gran combinación entre la mecatrónica y el desarrollo web. ¿Qué te parece un proyecto en NextJS más Arduino?",
};
