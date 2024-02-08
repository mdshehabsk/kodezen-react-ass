

export interface CourseItemValue {
    name: string;
    value: string | string[] | number ;
}

export interface CourseItem{
    id: number;
    value: CourseItemValue[];
}


