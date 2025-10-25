"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";

const FormSchema = z.object({
  name: z.string().min(2, "Campo necesario."),
  email: z.email(),
  lastName: z.string().optional(),
  message: z
    .string()
    .max(200, "El mensaje no puede tener más de 200 caracteres.")
    .optional(),
});

type FormType = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      lastName: "",
      message: "",
    },
  });

  const onSubmit = (data: FormType) => console.log(data);

  return (
    <section className="bg-black min-h-screen flex items-stretc" id="contacto">
      <div className="grid md:grid-cols-2 w-full">
        {/* Columna Izquierda */}
        <div className="flex flex-col justify-center items-center px-8 py-12 md:px-16">
          <div className="mb-12 text-white max-w-md">
            <h2 className="text-4xl font-bold mb-2 text-balance">
              Contáctanos
            </h2>
            <p className="text-muted-foreground">
              Una persona de nuestro equipo se pondrá en contacto contigo en la
              brevedad.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full max-w-md"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      <span className="text-destructive">*</span> Nombre
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Apellidos</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      <span className="text-destructive">*</span> Correo electrónico
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Tu mensaje{" "}
                      <span className="text-muted-foreground">(opcional)</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[120px]" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" variant="secondary">
                Enviar
              </Button>
            </form>
          </Form>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full h-full  hidden md:block">
          <Image
            src="https://images.pexels.com/photos/26737906/pexels-photo-26737906.jpeg"
            alt="Equipo de contacto"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
