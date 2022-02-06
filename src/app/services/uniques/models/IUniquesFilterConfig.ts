import {Hero, ItemType, QualityType, SubType} from "./Items";

export interface IUniquesFilterConfig {
  search?: string;
  itemTypes?: Array<ItemType>;
  itemSubtypes?: Array<SubType>;
  qualities?: Array<QualityType>;
  stats?: Array<string>;
  hero?: Hero;
  build?: { name: string, items: Array<string> };
}
