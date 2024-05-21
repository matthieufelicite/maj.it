import Temoignage from "@/components/Temoignage";
import Title from "@/components/Title";

export default function Page() {

    return (

        <>

            <Title subtitle="Vos données en sécurité" title="Stockage" text="Nos inffrastructures sont pretes à recevoir et à prendre soin de vos données." />

            <Temoignage image="/JM.png" text="Dans un monde ou vos données valent de l'or, il est indispensable de leur offrir un endroit sur." nom="Jean-Charles MCHANGAMA" poste="Responsable Stockage" />
        </>
    );
}