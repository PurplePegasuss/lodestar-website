import { Card, CardBody, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { type TeamMember as TeamMemberType } from '../../../data/team_members';

const TeamMember = ({
  member: { name, position, description, photo },
}: {
  member: TeamMemberType;
}) => (
  <Card>
    <CardBody>
      <Grid gridTemplateColumns="10em auto" columnGap="10" gridAutoRows="min-content">
        <GridItem rowSpan={3} alignSelf="center">
          <Image src={photo} />
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
