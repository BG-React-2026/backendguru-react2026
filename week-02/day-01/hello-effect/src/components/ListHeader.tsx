// rafce

type Props = {
  title?: string;
};

const ListHeader = ({
  title = 'Most played songs this week',
}: Props) => {
  return (
    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
      {title}
    </li>
  );
};

export default ListHeader;
