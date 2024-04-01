import {
  MdStarRate,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from "react-icons/md";

export const Rating = ({
  value,
  caption
}: {
  value: number;
  caption: string;
}) => {
  const Full = () => <MdStarRate style={{ fill: "#ffc000", fontSize: "22px"  }} />;
  const Half = () => <MdOutlineStarHalf style={{ fill: "#ffc000", fontSize: "22px"  }} />;
  const Empty = () => <MdOutlineStarBorder style={{ fontSize: "22px" }} />;

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        {value >= 1 ? <Full /> : value >= 0.5 ? <Half /> : <Empty />}
        {value >= 2 ? <Full /> : value >= 1.5 ? <Half /> : <Empty />}
        {value >= 3 ? <Full /> : value >= 2.5 ? <Half /> : <Empty />}
        {value >= 4 ? <Full /> : value >= 3.5 ? <Half /> : <Empty />}
        {value >= 5 ? <Full /> : value >= 4.5 ? <Half /> : <Empty />}
      </div>
 {caption && <span className="text-sm">{caption}</span>}
    </div>
  );
};
