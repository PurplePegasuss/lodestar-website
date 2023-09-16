import { Card, CardBody, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const TeamMember = ({
  name,
  position,
  description,
  photo_url,
}: {
  name: string;
  position: string;
  description: string;
  photo_url: string;
}) => (
  <Card>
    <CardBody>
      <Grid gridTemplateColumns="10em auto" columnGap="10" gridAutoRows="min-content">
        <GridItem rowSpan={3} alignSelf="center">
          <Image src={photo_url} />
        </GridItem>
        <GridItem>
          <Heading>{name}</Heading>
        </GridItem>
        <GridItem marginBottom="5">
          <Text>{position}</Text>
        </GridItem>
        <GridItem>
          <Text>{description}</Text>
        </GridItem>
      </Grid>
    </CardBody>
  </Card>
);

export default TeamMember;
