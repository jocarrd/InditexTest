import { convertTime, formatDate } from './utils'

describe('test format date helper', () => {
  test('formats date string to DD/MM/YYYY format', () => {
    expect(formatDate('2022-01-01')).toBe('01/01/2022')
    expect(formatDate('2023-03-29')).toBe('29/03/2023')
  })
})

describe('test convertTime helper', () => {
  it('returns formatted time string', () => {
    expect(convertTime(0)).toEqual('0:00:00')
    expect(convertTime(60000)).toEqual('0:01:00')
    expect(convertTime(3600000)).toEqual('1:00:00')
    expect(convertTime(86400000)).toEqual('24:00:00')
  })

  it('handles leading zeros', () => {
    expect(convertTime(45000)).toEqual('0:00:45')
    expect(convertTime(540000)).toEqual('0:09:00')
    expect(convertTime(7200000)).toEqual('2:00:00')
  })
})
