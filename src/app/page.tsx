"use client";

import Image from 'next/image';
import { Calendar, Clock, MapPin, Gift, Heart } from 'lucide-react';
import { PlaceHolderImages, getAssetPath } from '@/lib/placeholder-images';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RosePetalAnimation } from '@/components/rose-petal-animation';
import Countdown from '@/components/countdown';

export default function WanderlustVowsPage() {
  const couple1 = PlaceHolderImages.find(img => img.id === 'couple-1');
  const couple2 = PlaceHolderImages.find(img => img.id === 'couple-2');
  const couple3 = PlaceHolderImages.find(img => img.id === 'couple-3');
  const churchImage = PlaceHolderImages.find(img => img.id === 'church');

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <main className="relative">
        <header className="relative flex min-h-screen flex-col items-center justify-center p-4 text-center text-white">
          <div className="absolute inset-0 z-0">
              <Image
                src={getAssetPath('/hero-background.jpeg')}
                alt="El novio colocando el anillo de bodas en el dedo de la novia durante la ceremonia."
                fill
                className="object-cover brightness-50 animate-zoom-in"
                priority
              />
          </div>
          <RosePetalAnimation />
          <div className="relative z-10 flex flex-col items-center animate-in fade-in duration-1000 delay-500">
            <p className="font-body text-lg tracking-widest md:text-xl">SAVE THE DATE</p>
            <h1 className="mt-4 font-headline text-6xl md:text-8xl lg:text-9xl">Pamela & Felipe</h1>
            <p className="mt-4 text-lg md:text-xl">¡Nos casamos!</p>
            <Separator className="my-8 w-24 bg-white/50" />
            <div className="flex items-center gap-4 rounded-full bg-black/20 px-6 py-3 text-base backdrop-blur-sm md:text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>07.02.2026</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-white/50"/>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Cartago, CR</span>
              </div>
            </div>
          </div>
        </header>

        <section id="welcome" className="bg-secondary py-20 px-4 text-center md:py-28">
          <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl">Con la bendición de Dios y nuestros padres</h2>
            <p className="mt-6 text-lg md:text-xl text-foreground/80">
              Tenemos el honor de invitarlos a celebrar nuestro matrimonio. Su presencia es el regalo más importante para nosotros.
            </p>
            <Countdown />
          </div>
        </section>

        <section id="story" className="py-20 px-4 md:py-28">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-center font-headline text-4xl md:text-5xl">Nuestra Historia</h2>
                <p className="mt-6 text-center text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">Un viaje que comenzó con una chispa y se convirtió en una llama eterna. Cada momento juntos ha sido una aventura, y este es solo el comienzo de nuestro para siempre.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    {[couple1, couple2, couple3].map((photo) => photo && (
                        <div key={photo.id} className="overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105 hover:shadow-2xl aspect-[3/4]">
                             <Image src={photo.imageUrl} alt={photo.description} width={600} height={800} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="details" className="bg-secondary py-20 px-4 md:py-28">
          <div className="container mx-auto max-w-6xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h2 className="text-center font-headline text-4xl md:text-5xl">El Gran Día</h2>
             <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-8">
                    <Card className="bg-transparent border-none shadow-none">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl">Ceremonia y Recepción</CardTitle>
                                <CardDescription className="text-md">Centro Salesiano Santo Domingo Savio</CardDescription>
                                <a href="https://maps.app.goo.gl/ApbjUDGFnZUvtDEW8" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Ver en mapa</a>
                            </div>
                        </CardHeader>
                    </Card>
                     <Card className="bg-transparent border-none shadow-none">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <Clock className="h-8 w-8" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl">Hora</CardTitle>
                                <CardDescription className="text-md">Sábado, 07 de Febrero de 2026, 1:30 PM</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                     <Card className="bg-transparent border-none shadow-none">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <Gift className="h-8 w-8" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl">Regalos</CardTitle>
                                <CardDescription className="text-md">Su presencia es nuestro mayor regalo. Si desean obsequiarnos algo, agradecemos contribuciones para nuestra luna de miel.</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
                <div className="overflow-hidden rounded-lg shadow-xl aspect-video md:aspect-[4/3]">
                    {churchImage && <Image src={churchImage.imageUrl} alt={churchImage.description} width={800} height={600} className="w-full h-full object-cover transition-transform hover:scale-110" />}
                </div>
             </div>
          </div>
        </section>

        <section id="guest-photos" className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl">Comparte Tus Recuerdos</h2>
            <p className="mt-6 text-lg md:text-xl text-foreground/70">
              ¡Nos encantaría ver la boda desde tus ojos! Escanea el código para compartir tus fotos y momentos favoritos del gran día.
            </p>
            <div className="mt-8 inline-block rounded-lg shadow-xl transition-transform hover:scale-105">
                 <Image 
                    src={getAssetPath('/guest-photos-qr.png')} 
                    alt="Código QR para compartir fotos" 
                    width={220} 
                    height={264} 
                    className="rounded-lg"
                  />
            </div>
          </div>
        </section>

        <footer className="py-20 px-4 text-center bg-secondary">
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <h2 className="font-headline text-4xl md:text-5xl">¿Nos acompañas?</h2>
                <p className="mt-4 max-w-xl mx-auto text-foreground/70">Por favor, confirma tu asistencia antes del 07 de Enero de 2026. ¡Será un honor celebrar contigo!</p>
                <a href="https://wa.me/50688132533?text=Hola%20Felipe%2C%20s%C3%AD%2C%20s%C3%AD%20asistir%C3%A9%20a%20la%20boda" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-lg transition-transform hover:scale-105 px-10 py-6 text-lg">
                      Confirmar Asistencia
                  </Button>
                </a>
                
                <div className="mt-20">
                    <p className="font-headline text-3xl">Con todo nuestro amor,</p>
                    <p className="font-headline text-4xl mt-2">Pamela & Felipe</p>
                    <Heart className="mx-auto mt-6 h-8 w-8 text-primary" fill="hsl(var(--primary))" />
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}
