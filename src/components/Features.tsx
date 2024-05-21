import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { ComputerDesktopIcon, CircleStackIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const features = [

    {
        name: 'Sites / Applications',
        description:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
        href: '#',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Sécurité',
        description:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        href: '#',
        icon: LockClosedIcon,
    },
    {
        name: 'Stockage',
        description:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        href: '#',
        icon: CircleStackIcon,
    },
]

export default function Features() {

    return (

        <div className="py-24 sm:py-32" id='features'>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl lg:text-center">

                    <h2 className="text-base font-semibold leading-7 text-[#3499e7]">L'informatique pour tous</h2>

                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Tout ce dont vous avez besoin sur le plan informatique
                    </p>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nous vous proposons de réaliser tout les services informatiques dont vous aurez besoin pour développer votre activité.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">

                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

                        {features.map((feature) => (

                            <div key={feature.name} className="flex flex-col">

                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none text-[#3499e7]" aria-hidden="true" />
                                    {feature.name}
                                </dt>

                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">

                                    <p className="flex-auto">{feature.description}</p>

                                    <p className="mt-6">

                                        <Link href={feature.href} className="flex items-center text-sm font-semibold leading-6 text-[#3499e7]">

                                            En savoir plus <ArrowRightIcon className="w-5 h-5 ml-2" />
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
