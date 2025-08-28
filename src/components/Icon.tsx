import React, { type SVGProps } from "react";

export type IconName = "person" | "home" | "chevron" | "telegram" | "linkedIn" | "github" | "gitlab" | "experience" | "skills";

interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName;
}

const iconModules = import.meta.glob<boolean, string, { default: React.FC }>(
	"./icons/*.svg",
	{
		query: "?react",
	},
);

const icons = Object.values(iconModules).reduce<
	Record<IconName, React.LazyExoticComponent<React.FC<SVGProps<SVGSVGElement>>>>
>(
	(accum, module) => {
		const name = module.name.split(/[/.]/)[3] as IconName;
		accum[name] = React.lazy(module);
		return accum;
	},
	{} as Record<
		IconName,
		React.LazyExoticComponent<React.FC<SVGProps<SVGSVGElement>>>
	>,
);

function Icon({ name, ...rest }: IconProps) {
	const { [name]: IconComponent } = icons;

	if (!IconComponent) {
		return null;
	}

	return <IconComponent {...rest} />;
}

export default Icon;
