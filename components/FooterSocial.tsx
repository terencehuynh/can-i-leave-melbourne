import React from 'react'
import {
  Navigation,
  List as _List,
  Link as _Link,
  Icon,
  styled,
} from 'fannypack'

type ListItemProps = {
  name: string
  icon: string
  link: string
}

const List = styled(_List)`
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: row;

  li {
    margin: 0 8px 0 0;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Link = styled(_Link)`
  font-size: 1.5rem;
  line-height: 24px;
  height: 24px;
  width: 24px;
  display: block;
  color: #8190a2;
`

const ListItem: React.FC<ListItemProps> = ({ name, icon, link }) => (
  <List.Item>
    <Link href={link}>
      <Icon icon={icon} a11yLabel={name} />
    </Link>
  </List.Item>
)

const FooterSocial = () => (
  <Navigation a11yTitle="Footer Links">
    <List>
      <ListItem
        name="GitHub"
        icon="brand-github"
        link="https://github.com/terencehuynh/can-i-leave-melbourne"
      />
      <ListItem
        name="Twitter"
        icon="brand-twitter"
        link="https://twitter.com/terencehuynh/"
      />
      <ListItem
        name="Instagram"
        icon="brand-instagram"
        link="https://www.instagram.com/terencehuynh/"
      />
      <ListItem
        name="LinkedIn"
        icon="brand-linkedin-in"
        link="https://www.linkedin.com/in/terencehuynh/"
      />
      <ListItem
        name="Buy Me A Coffee"
        icon="solid-coffee"
        link="https://www.buymeacoffee.com/terencehuynh"
      />
    </List>
  </Navigation>
)

export default FooterSocial
