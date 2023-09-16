import { Card, CardBody } from '@chakra-ui/react';
import NamedSection from '../../../components/layout/named_section';

const OrderSection = ({ project_slug }: { project_slug: string }) => (
  <NamedSection name="Заказать">
    <Card>
      <CardBody>Тут должна быть форма заказа ({project_slug})</CardBody>
    </Card>
  </NamedSection>
);

export default OrderSection;
