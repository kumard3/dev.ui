"use client";

import { componentMap } from "@/utils/component-map";

interface Props {
  componentName?: string;
  componentType?: string;
}

export default function ComponentDisplay({
  componentName,
  componentType,
}: Props) {
  const Component = componentMap[componentName as keyof typeof componentMap];

  return <Component />;
}
