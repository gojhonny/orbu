import { DEFAULT_ORBO_PRESET } from '@core/config.data'
import { describe, expect, it } from 'vitest'
import { isOrboPresetName } from './is-preset-name.guard'
import { normalizeOrboPreset } from './normalize-preset.compute'

describe('core/normalize-preset', () => {
  it('normalizes invalid input to the stable default', () => {
    expect(normalizeOrboPreset('unknown')).toBe(DEFAULT_ORBO_PRESET)
  })

  it('accepts canonical presets and rejects unsupported names', () => {
    expect(isOrboPresetName('neongate')).toBe(true)
    expect(normalizeOrboPreset('neongate')).toBe('neongate')
    expect(normalizeOrboPreset('peach')).toBe('peach')
    expect(isOrboPresetName('unknown')).toBe(false)
  })
})
