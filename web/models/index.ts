/**
 * ModelRequirement에 정의된 메소드들은 생성자에서 field가 할당 된 이후에 반드시 호출되어야 합니다.
 */
export interface ModelRequirement {
  validate: () => void;
}
