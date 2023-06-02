import React, { type ReactElement } from 'react';
import { css } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { type GrafanaTheme2 } from '@grafana/data';
import { useTooltipProps } from './Tooltip';
import { BarTooltip } from './BarTooltip';

type Props = {
  percentage: number;
  value: number;
  color: string;
};

export function Bar(props: Props): ReactElement {
  const { percentage, value, color } = props;
  const styles = useStyles2(getStyles(color));
  const tooltipProps = useTooltipProps({
    content: <BarTooltip />,
  });

  return (
    <div {...tooltipProps} className={styles.bar} style={{ width: `${percentage * 100}%` }}>
      <p className={styles.text}>{value}</p>
    </div>
  );
}

const getStyles = (color: string) => (theme: GrafanaTheme2) => {
  return {
    bar: css({
      flexGrow: 2,
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    text: css({
      margin: 0,
      color: theme.colors.text.maxContrast,
      paddingLeft: '5px',
      paddingRight: '5px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }),
  };
};
