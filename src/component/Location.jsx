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

export default function Location() {
    return (
        <div>

            <Card className="mt-6 w-96 p-4 m-4 mb-16">
                <CardBody>
                    <MapPinIcon className="text-indigo-600 w-12 h-12 mb-4" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Our Address                </Typography>
                    <Typography>
                        Bhuvan Pride, near AIIMS, Bhubaneswar, Odisha-751019
                    </Typography>
                </CardBody>

            </Card>
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
        </div>
    );
}