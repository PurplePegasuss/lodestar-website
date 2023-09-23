import { DefaultEmailLink } from '../../../components/contacts/email';
import NamedSection from '../../../components/layout/named_section';

const OrderSection = ({ project_slug: _ }: { project_slug: string }) => (
  <NamedSection name="Заказать">
    Для заказа напишите нам на почту <DefaultEmailLink />.
  </NamedSection>
);

export default OrderSection;
