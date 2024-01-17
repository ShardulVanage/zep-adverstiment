import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { BsWhatsapp } from 'react-icons/bs'
import { slideAnimation } from './Motion'
import { motion } from 'framer-motion'


export default function Location() {
    return (
        <motion.div  {...slideAnimation("left")}>

            <Card className="mt-6 w-96 p-4 m-4 mb-16">
                <CardBody>
                    <MapPinIcon className="text-indigo-600 w-12 h-12 mb-4" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Our Address                </Typography>
                    <Typography>
                        Bhubaneswar, Odisha-751019
                    </Typography>
                </CardBody>

            </Card>
            <a href="mailto:contact@zepanalytics.com">
                <Card className="mt-6 w-96 p-4 m-4 mb-16">
                    <CardBody>
                        <EnvelopeIcon className="text-indigo-600 w-12 h-12 mb-4" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Email Us
                        </Typography>
                        <Typography>
                            contact@zepanalytics.com


                        </Typography>
                    </CardBody>

                </Card>
            </a>
            <Card className="mt-6 w-96 p-4 m-4 mb-16">
                <CardBody>
                    <PhoneIcon className="text-indigo-600 w-12 h-12 mb-4" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Phone
                    </Typography>
                    <Typography>

                        +91 7007243034

                    </Typography>
                </CardBody>

            </Card>
            <a href="https://wa.me/+918237040802">
                <Card className="mt-6 w-96 p-4 m-4 mb-16">
                    <CardBody>
                        <BsWhatsapp className="text-indigo-600 w-12 h-12 mb-4" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            WhatsApp
                        </Typography>
                        <Typography>
                            +91 79786 52529


                        </Typography>
                    </CardBody>

                </Card>
            </a>
        </motion.div>
    );
}
