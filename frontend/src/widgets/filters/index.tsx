import { Box, SegmentedControl } from "@radix-ui/themes";
import { useState } from "react";
import { Slider } from "radix-ui";
import styles from "./filters.module.scss";

export const Filters = () => {
  const [value, setValue] = useState<Array<number>>([25, 20000]);

  const handleChange = (newValue: Array<number>) => {
    setValue(newValue);
  };
  return (
    <Box>
      <SegmentedControl.Root variant="surface" defaultValue="new">
        <SegmentedControl.Item value="new">Новое</SegmentedControl.Item>
        <SegmentedControl.Item value="old">Старое</SegmentedControl.Item>
      </SegmentedControl.Root>
      <Box>
        <Slider.Root
          value={value}
          onValueChange={handleChange}
          min={0}
          max={20000}
          step={1}
          aria-label="Price range"
          className={styles.sliderRoot}
        >
          <Slider.Track className={styles.sliderTrack}>
            <Slider.Range className={styles.sliderRange} />
          </Slider.Track>
          <Slider.Thumb className={styles.sliderThumb} />
          <Slider.Thumb className={styles.sliderThumb} />
        </Slider.Root>

        <div style={{ marginTop: 10 }}>
          <span>Цена: {value[0]}</span> ₽ - <span>{value[1]} ₽</span>
        </div>
      </Box>
    </Box>
  );
};
