import { v4 } from 'uuid'
import { Record } from 'immutable'

const defaultValue = {
  id: '',
}

export type ProjectStarParams = Partial<
  ReturnType<ProjectStarRecord['toParams']>
>

export class ProjectStarRecord extends Record(defaultValue) {
  public toParams() {
    return this.toJSON()
  }

  public static create(params: ProjectStarParams) {
    return new ProjectStarRecord({
      ...params,
      id: params.id || v4(),
    })
  }
}