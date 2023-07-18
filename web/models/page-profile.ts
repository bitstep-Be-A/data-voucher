import { Key } from "@/models/types";

export interface BlockLogoImageModel {
    readonly profileBlock?: Key;
    default: string;
    dark: string;
}

export interface PageProfileModel {
    readonly user?: Key;
    readonly textBlocks: TextBlockModel[];
    readonly linkBlocks: LinkBlockModel[];
}

export interface BlockModelInterface {
    readonly id: Key;
    readonly pageProfile?: Key;
    readonly label: string;
    readonly name: string;
    readonly category: BlockCategoryCode;
    order: number;
    defaultLogoUrl?: string;
    darkLogoUrl?: string;
    isActive: boolean;
}

export interface TextBlockModel extends BlockModelInterface {
    readonly label: "텍스트";
    readonly name: "text";
    readonly category: BlockCategoryCode.Page;
    titleText: string;
    mainText: string;
    textAlign: 'L' | 'C' | 'R';
}

export interface LinkBlockModel extends BlockModelInterface {
    readonly label: "링크";
    readonly name: "link";
    readonly category: BlockCategoryCode.Page;
    titleText: string;
    href: string;
    imageUrl: string;
}

export enum BlockCategoryCode {
    Page=1,
    Business=2,
    Communication=3
}
