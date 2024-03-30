import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";

function NavigationShow() {
  return (
    <Breadcrumb
      spacing="8px"
      py={4}
      px={10}
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Articles</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Jsde yenilikler</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default NavigationShow;
