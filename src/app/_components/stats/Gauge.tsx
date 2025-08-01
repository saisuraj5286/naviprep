
type Props = {
  value: number; // Score value (0-100)
};

export default function Gauge({ value }: Props) {
  const angle = (value / 100) * 180;

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="100" viewBox="0 0 180 100">
        {/* Background arc */}
        <path
          d="M10,100 A90,90 0 0,1 170,100"
          fill="none"
          stroke="#edefff"
          strokeWidth={15}
        />
        {/* Foreground arc */}
        <path
          d={`M10,100 A90,90 0 0,1 ${10 + 160 * Math.cos(Math.PI - (angle * Math.PI) / 180)},${100 - 90 * Math.sin((angle * Math.PI) / 180)}`}
          fill="none"
          stroke="#a084ee"
          strokeWidth={15}
          strokeLinecap="round"
        />
        {/* Indicator line */}
        <line
          x1={90}
          y1={100}
          x2={90 - 80 * Math.cos((Math.PI / 180) * angle)}
          y2={100 - 80 * Math.sin((Math.PI / 180) * angle)}
          stroke="#a084ee"
          strokeWidth={3}
        />
      </svg>
      <span className="text-4xl font-bold mt-[-40px]">{value}</span>
    </div>
  );
}
