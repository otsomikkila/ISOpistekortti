import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function SimpleCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Älä juota fukseja
          </Typography>
          <Typography>
            Tämä tehtävä tuskin esittelyjä kaipaa
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Merkkaa tehdyksi</Button>
        </CardFooter>
      </Card>
    </div>
  );
}