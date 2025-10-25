import { BentoGridSection } from "@/components/app/BentoGrid";
import { Hero } from "@/components/app/Hero";
import { HeroTwo } from "@/components/app/CtaSection";
import Testimonials from "@/components/app/Testimonials";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ImageGallery } from "@/components/app/image-gallery";
import ContactForm from "@/components/app/ContactForm";

export default function page() {
  return (
    <>
      <Hero
        className="min-h-[95vh] mb-10"
        title="¡ÚNETE A CHAMPIONS SOCCER ACADEMY!"
        subtitle="La academia con más campeonatos año tras año."
        ctaText="Contáctanos"
        ctaHref="#contactanos"
        imageSrc="https://images.pexels.com/photos/31908556/pexels-photo-31908556.png"
      />

      <section className="py-16 px-2" id="servicios">
        <div className="mx-auto max-w-2xl text-center pb-8">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Servicios que ofrecemos en TheChampionsMX
          </h2>
        </div>
        <BentoGridSection />
      </section>

      <section className="py-16 px-2">
        <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://static.wixstatic.com/media/cb8d62_7c0bb1bf913e49938e6155c478dcf7c7~mv2.jpg/v1/crop/x_123,y_1452,w_2761,h_1695/fill/w_1556,h_948,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4459_JPG.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover object-top grayscale"
            />
          </AspectRatio>

          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium">
              LA ACADEMIA CON MÁS CAMPEONATOS AÑO TRAS AÑO.
            </h2>
            <div className="space-y-6">
              <p>
                Con más de 50 campeonatos obtenidos en los últimos años,
                Champions se ha convertido en un referente de excelencia en
                formación deportiva con enfoque en los valores humanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-5xl mx-auto px-4 py-16 md:py-32"
        id="instalaciones"
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2 text-balance">
            Nuestras instalaciones
          </h2>
          <p className="text-muted-foreground">
            Haga clic en cualquier imagen para verla en pantalla completa.
          </p>
        </div>
        <ImageGallery
          images={[
            {
              src: "https://static.wixstatic.com/media/cb8d62_a4c98fc661f445d08ca6b844671ea9e0~mv2.jpg/v1/fill/w_1202,h_850,q_90,enc_avif,quality_auto/cb8d62_a4c98fc661f445d08ca6b844671ea9e0~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_ee99f679cef947fd8971eb07fbcda1c0~mv2.jpg/v1/fill/w_1202,h_850,q_90,enc_avif,quality_auto/cb8d62_ee99f679cef947fd8971eb07fbcda1c0~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_e4c90717fa32422d9be0c06be959b953~mv2.jpg/v1/fill/w_602,h_850,q_90,enc_avif,quality_auto/cb8d62_e4c90717fa32422d9be0c06be959b953~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_63c475f4e70f49a2bdc9113b776af09d~mv2.jpg/v1/fill/w_602,h_850,q_90,enc_avif,quality_auto/cb8d62_63c475f4e70f49a2bdc9113b776af09d~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_093d2b48def24cdc853829c07b8949be~mv2.jpg/v1/fill/w_1202,h_850,q_90,enc_avif,quality_auto/cb8d62_093d2b48def24cdc853829c07b8949be~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_50ac0e57261240f588f721d171f83a4b~mv2.jpg/v1/fill/w_1202,h_850,q_90,enc_avif,quality_auto/cb8d62_50ac0e57261240f588f721d171f83a4b~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_4680d0a9452c42e0a84635a934da14ec~mv2.jpg/v1/fill/w_602,h_850,q_90,enc_avif,quality_auto/cb8d62_4680d0a9452c42e0a84635a934da14ec~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_80690ce23b794093896dc1c862a85409~mv2.jpg/v1/fill/w_602,h_850,q_90,enc_avif,quality_auto/cb8d62_80690ce23b794093896dc1c862a85409~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_006289d1d64e4044b62edd0bb48f1e83~mv2.jpg/v1/fill/w_602,h_850,q_90,enc_avif,quality_auto/cb8d62_006289d1d64e4044b62edd0bb48f1e83~mv2.jpg",
              alt: "Descripción 1",
            },
            {
              src: "https://static.wixstatic.com/media/cb8d62_5441c6f19c234114863f3bd58b6b430c~mv2.jpg/v1/fill/w_1734,h_1958,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/cb8d62_5441c6f19c234114863f3bd58b6b430c~mv2.jpg",
              alt: "Descripción 1",
            },
          ]}
        />
      </section>

      <HeroTwo
        className="min-h-[65vh] mb-10"
        title="El éxito no es un accidente. Es trabajo duro, disciplina, perseverancia, aprendizaje, estudio, sacrificio y sobre todo, amor por lo que estas haciendo. - Pelé"
        imageSrc="https://images.pexels.com/photos/27935036/pexels-photo-27935036.png"
      />

      <Testimonials />

      <ContactForm />
    </>
  );
}
