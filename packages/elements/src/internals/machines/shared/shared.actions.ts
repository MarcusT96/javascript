import type { SignInStrategy } from '@clerk/types';

import type { SignUpVerificationEvents } from '~/internals/machines/sign-up';
import type { ThirdPartyMachineContext, ThirdPartyMachineEvent } from '~/internals/machines/third-party';
import type { BaseRouterLoadingStep } from '~/internals/machines/types';

type SendToLoadingProps = {
  context: ThirdPartyMachineContext;
  event: ThirdPartyMachineEvent | SignUpVerificationEvents;
};

export function sendToLoading({ context, event }: SendToLoadingProps): void {
  // Unrelated to the `context` of each machine, the step passed to the loading event must use BaseRouterLoadingStep
  let step: BaseRouterLoadingStep | undefined;
  let strategy: SignInStrategy | undefined;
  let action: string | undefined;

  // By default the loading state is set to `true` when this function is called
  // Only if these events are received, the loading state is set to `false`
  // Early return here to avoid unnecessary checks
  if (event.type.startsWith('xstate.done.') || event.type.startsWith('xstate.error.')) {
    context.parent.send({
      type: 'LOADING',
      isLoading: false,
      step: undefined,
      strategy: undefined,
    });

    return;
  }

  // `context.loadingStep: "strategy"` is not a valid BaseRouterLoadingStep (on purpose) so needs to be handled here. This context should be used when `step` should be undefined and `strategy` be defined instead
  if (context.loadingStep === 'strategy') {
    step = undefined;

    // Third-party machine handling
    if (event.type === 'REDIRECT') {
      strategy = event.params.strategy;
    }

    context.parent.send({
      type: 'LOADING',
      isLoading: true,
      step,
      strategy,
    });
    // } else if (context.loadingStep === 'continue') {
    //   step = 'continue';
    //   strategy = undefined;
    //   action = 'action' in event ? event.action : undefined;
    //   context.parent.send({
    //     type: 'LOADING',
    //     isLoading: true,
    //     step,
    //     strategy,
    //     action,
    //   });
    // } else if (context.loadingStep === 'start') {
    //   step = 'start';
    //   strategy = undefined;
    //   action = 'action' in event ? event.action : undefined;

    //   context.parent.send({
    //     type: 'LOADING',
    //     isLoading: true,
    //     step,
    //     strategy,
    //     action,
    //   });
  } else {
    step = context.loadingStep;
    strategy = undefined;
    action = 'action' in event ? event.action : undefined;

    context.parent.send({
      type: 'LOADING',
      isLoading: true,
      step,
      strategy,
      action,
    });
  }
}
