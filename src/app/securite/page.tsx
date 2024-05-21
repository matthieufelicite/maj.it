import Temoignage from "@/components/Temoignage";
import Title from "@/components/Title";

export default function Page() {

    return (

        <>

            <Title subtitle="Sécurizez votre entreprise" title="Sécurité" text="Notre équipe sécurité se tient prête à vous aider à sécuriser vottre entreprise pour rendre votre croissance plus sure." />

            <Temoignage image="/MF.heic" text="De nos jours, il est impératif que nos systèmes informatiques soient sécurisés, sans quoi la croissance de notre entreprise peut etre compromise." nom="Matthieu FELICITE" poste="Responsable Sécurité" />
        </>
    );
}